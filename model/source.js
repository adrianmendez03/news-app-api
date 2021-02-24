const { Schema, model } = require('mongoose')

const sourceSchema = new Schema(
    {
        category: { type: String },
        country: { type: String },
        description: { type: String },
        id: { type: String },
        language: { type: String },
        name: { type: String },
        url: { type: String }
    },
    { timestamps: true }
)

const Source = model('Source', sourceSchema)

module.exports = Source