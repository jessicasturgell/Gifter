﻿using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Delete(int id);
        List<Post> GetAll();
        Post GetById(int id);
        void Update(Post post);
        public List<Post> GetAllWithComments();
        public Post GetByIdWithComments(int id);
        public List<Post> Search(string criterion, bool sortDescending);
        public List<Post> Hottest(DateTime since, bool sortDescending);
    }
}