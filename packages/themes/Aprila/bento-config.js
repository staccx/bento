module.exports = () => ({
  sanityProjectId: "1pb4gkca",
  sanityDataset: "production",
  sanityDocType: "translations",
  sanityToken:
    "skB8cv8nMffaSfkuvUmEIq25ULqre4bWrvw9pUDLhWjgYbkEID8hhhcD1OT6bqbWFoWGKixsNVUZEVfOsQDhhFDSGRgodFFu0TI8pVH1qzZp19SGUsKb9OwLM6dR8S1bhl0vNYsWhR01iXHJAASAwTuc2ww4GQp48TGsannaQPNFX9oB7uFi",
  translationReducer: (acc, curr) => {
    acc[curr.i18nKey.current] = curr.value[0]
    return acc
  }
})
