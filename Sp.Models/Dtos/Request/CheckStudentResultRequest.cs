using SP.Models.Dtos;

namespace SP.Models.Dtos
{
    public class CheckStudentResultRequest : IRequest
    {
        public CheckStudentResultRequest(string indexNumber)
        {
            IndexNumber = indexNumber;
        }

        public string IndexNumber { get;}
    }
}