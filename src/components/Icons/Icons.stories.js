import React from "react"
import BankId from "./BankId/BankId"
import BankIdMobile from "./BankIdMobile/BankIdMobile"
import CaretRight from "./CarerRight/CaretRight"
import Caret from "./Caret/Caret"
import Check from "./Check/Check"
import Close from "./Close/Close"
import CodeCard from "./CodeCard/CodeCard"
import CodeDevice from "./CodeDevice/CodeDevice"
import Info from "./Info/Info"
import QrCode from "./QrCode/QrCode"
import QuestionMark from "./QuestionMark/QuestionMark"
import Sms from "./Sms/Sms"
import Success from "./Success/Success"
import Upload from "./Upload/Upload"
import Warning from "./Warning/Warning"

export default {
  title: "new/Components/Icons",
  component: [
    BankId,
    BankIdMobile,
    CaretRight,
    Caret,
    Check,
    Close,
    CodeCard,
    CodeDevice,
    Info,
    QrCode,
    QuestionMark,
    Sms,
    Success,
    Upload,
    Warning
  ]
}

export const StandardBankId = args => <BankId {...args} />

export const StandardBankIdMobile = args => <BankIdMobile {...args} />

export const StandardCaretRight = args => <CaretRight {...args} />

export const StandardCaret = args => <Caret {...args} />

export const StandardCheck = args => <Check {...args} />

export const StandardClose = args => <Close {...args} />

export const StandardCodeCard = args => <CodeCard {...args} />

export const StandardCodeDevice = args => <CodeDevice {...args} />

export const StandardInfo = args => <Info {...args} />

export const StandardQrCode = args => <QrCode {...args} />

export const StandardQuestionMark = args => <QuestionMark {...args} />

export const StandardSms = args => <Sms {...args} />

export const StandardSuccess = args => <Success {...args} />

export const StandardUpload = args => <Upload {...args} />

export const StandardWarning = args => <Warning {...args} />
