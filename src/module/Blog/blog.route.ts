import express from 'express'
import { BlogControllers } from './blog.controller'



const blogRouter = express.Router()

blogRouter.post(
  '/',
  BlogControllers.createBlog
)

blogRouter.get('/',  BlogControllers.getBlogs)
blogRouter.get('/:id',  BlogControllers.getSingleBlog)
blogRouter.patch('/:id',  BlogControllers.updateBlog)
blogRouter.delete('/:id', BlogControllers.deleteBlog)

export default blogRouter