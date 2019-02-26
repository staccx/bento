const S3 = require("aws-sdk/clients/s3")
const fs = require("fs-extra")
const path = require("path")
const { setupSpinner, runCommand } = require("./__helpers")

const client = new S3()

const DEFAULT_BUCKET = "quantfolio"

const spinner = setupSpinner("S3")

const s3 = async ({
  bucket = DEFAULT_BUCKET,
  file,
  directory = "",
  name,
  ignorePattern = null
}) => {
  if (!file) {
    const files = await runCommand({
      spinner,
      command: async () => {
        const dir = path.resolve(process.cwd(), directory)
        return new Promise((resolve, reject) => {
          fs.readdir(dir, (err, files) => {
            if (err) {
              return reject(err)
            }
            const regex = ignorePattern ? new RegExp(ignorePattern) : null

            const f = regex
              ? files.filter(file => {
                  return !regex.exec(file)
                })
              : files

            resolve(f.map(file => path.resolve(dir, file)))
          })
        })
      },
      startText: "Getting files in directory",
      succeedText: "Files retrieved",
      failText: "Could not retrive files"
    })

    await runCommand({
      spinner,
      command: async () => {
        const promises = files.map((file, index) => {
          const extension = path.extname(file)
          return uploadFile(file, `${name}-${index}${extension}`, bucket)
        })

        return Promise.all(promises)
      },
      startText: `Uploading ${files.length} files`,
      succeedText: "Files uploaded",
      failText: "Could not upload files"
    })
  } else {
    console.log("reading file", file)
    const p = path.resolve(process.cwd(), file)
    await uploadFile(p, name, bucket)
  }
}

const uploadFile = async (file, name, bucket) => {
  const data = await runCommand({
    spinner,
    command: async () => {
      return new Promise((resolve, reject) => {
        fs.readFile(file, "utf8", (err, data) => {
          if (err) {
            spinner.fail(err.message)
            reject(err)
          } // an error occurred
          else {
            resolve(data)
          }
        })
      })
    },
    succeedText: "Read data complete",
    startText: "Reading data...",
    failText: "Could not read data"
  })

  const params = {
    Body: data,
    Bucket: bucket,
    Key: name,
    ACL: "public-read",
    ServerSideEncryption: "AES256",
    ContentType: "application/javascript"
  }

  await runCommand({
    spinner,
    command: async () => {
      return new Promise((resolve, reject) => {
        client.upload(params, (err, data) => {
          if (err) {
            spinner.fail(err.message)
            reject(err)
          } // an error occurred
          else {
            resolve(data)
          }
        })
      })
    },
    onFail: error => console.error(error),
    startText: "Uploading file",
    succeedText: "File uploaded",
    failText: "Failed to upload file"
  })
}

module.exports = s3
