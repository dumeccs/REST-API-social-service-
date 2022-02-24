const Comment = require('../models/comment.model');

// instruction
// clone the repository
// run `git remote remove origin`
// then you can add your remote repository 

class CommentController {
    static create = async (req, res) => {
        try {
            const { content } = req.body;

            const comment = await Comment.create({
                content
            });

            res.status(201).json(comment)
        } catch(error) {
            res.status(500).json('Server error')
        }
    }

    static getAll = async (req, res) => {
        try {
            // const query = req.query;
            // console.log(query)
            const comments = await Comment.find();

            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json('Server error') 
        }
    }

    static getOne = async (req,res) => {
        const {id} = req.params
        try{
            const comment = await Comment.findOne({id:id})
            res.status(200).json(comment)
        }
        catch(err){
            res.status(500).json('Server error')
        }
    }

    static update = async (req,res) =>{
        const {id} = req.params
        try{
            const updatedComment = await Comment.findOneAndUpdate({id:id},req.body)
            res.status(200).json(updatedComment)
        }
        catch(err){
            res.status(500).json('Server error')
        }
    }

    static delete = async (req,res) => {
        const { id } = req.params
        try{
            const deletedComment = await Comment.findOneAndDelete({id:id})
            res.status(200).json('Comment deleted successfully')
        }
        catch(err){
            res.status(500).json('Server error')
        }
    }
    // getOne
    // update
    // delete
}

module.exports = CommentController;