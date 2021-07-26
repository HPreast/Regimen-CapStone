using Regimen.Models;

namespace Regimen.Repositories
{
    public interface IUserRepository
    {
        public void Add(User user);
        public User GetByFirebaseUserId(string firebaseUserId);
    }
}