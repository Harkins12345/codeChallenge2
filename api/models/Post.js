const db = require('../dbConfig/init');

module.exports = class Post {
    constructor(data){
        this.title = data.title;
        this.author = data.author;
        this.story = data.story;
    };
    
    
    static findPost(postData){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT posts.*
                                                FROM posts 
                                                WHERE posts.author = $1
                                                AND posts.`, [ author ]);
                let book = new Book(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };
    
    static async create(postData){
        return new Promise (async (resolve, reject) => {
            try {
                const { title, author, story, day, month } = postData;
                let result = await db.query(`INSERT INTO posts
                                             (title, author, story, day, month)
                                              VALUES ($1, $2, $3, $4, $5)
                                              RETURNING *;`, [ title, author, story, day, month ]);
                //resolve (result.rows[0]);
                console.log(result.rows[0]);
                resolve('Good')
            } catch (err) {
                console.log(err)
                reject('Book could not be created');
            }
        });
    };
};