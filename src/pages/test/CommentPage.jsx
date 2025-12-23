import Comment from '../../components/test/Comment' ; 

const CommentPage = () => {
    // 변수선언, 통신, UI(html), 이벤트 처리     
    const comments = [
        {
            name: "임섭순",
            comment: "리액트 처음인데 재미있어요~"
        },
        {
            name: "섭섭이",
            comment: "저도 리액트 배워보고 싶어요~"
        },
        {
            name: "섭섭해",
            comment: "목이 아프당~"
        }
    ];

    return(
        <div>
            {
                comments.map( comment => {
                    return (
                        <Comment data={comment} />
                    )
                })    
            }
        </div>
    )

}

export default CommentPage ;

