import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: any) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlogInDB = async (id: string, payload: any) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogFromDB,
  updateBlogInDB,
  deleteBlogFromDB,
};