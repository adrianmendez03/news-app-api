const { Schema, model } = require('mongoose')

const articleSchema = new Schema(
    {
        author: { type: String },
        content: { type: String },
        description: { type: String },
        source: {
            id: { type: String },
            name: { type: String }
        },
        title: { type: String },
        url: { type: String },
        urlToImage: { type: String }
    },
    { timestamps: true }
)

const Article = model('Article', articleSchema)

module.exports = Article