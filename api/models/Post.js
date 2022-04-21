const db = require('../dbConfig/init');

module.exports = class Post {
    constructor(data) {
        this.title = data.title;
        this.author = data.author;
        this.story = data.story;
    };


    static findPost(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT posts.*
                                                FROM posts 
                                                WHERE posts.id = $1`, [id]);
                resolve (postData.rows[0]);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

    static async create(postData) {
        return new Promise(async (resolve, reject) => {
            try {
                const { title, author, story } = postData;
                let result = await db.query(`INSERT INTO posts
                                             (title, author, story)
                                              VALUES ($1, $2, $3)
                                              RETURNING *;`, [title, author, story]);
                resolve (result.rows[0]);
            } catch (err) {
                console.log(err)
                reject('Book could not be created');
            }
        });
    };
};