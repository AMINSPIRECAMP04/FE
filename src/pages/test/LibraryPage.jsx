import Book from '../../components/test/Book' ;

const LibararyPage = (props) => {
    
    const msg = '.feat(with jslim)' ;

    const books = [
        { name : 'A' , price : '10,000'},
        { name : 'B' , price : '20,000'},
        { name : 'C' , price : '30,000'},
        { name : 'D' , price : '40,000'},
    ];

    return (

        <div>
            <div align="center">
                <font color="red">안녕하세요~ 도서관 맛집입니다.  {msg} </font>
            </div>    
            
            <hr/>

            {
                books.map( book => {
                    
                    return (
                        <Book data={book} />  
                    )

                })
            }
            
        </div>
        
    )    
}

export default LibararyPage ;


