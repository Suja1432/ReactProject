import React from 'react'
import Rating from '@mui/material/Rating';
import './Details.css'
import{Datas} from './SharedItem'
const MainDetails = () => {
   
  return (
    <>
   
    
    <div>
        
        <h1>Harry Potter</h1>
        <div className="abc">
        <div className="image">
            <img src='https://sp.yimg.com/ib/th?id=OPA.XLQgzbBRO046nQ474C474&o=5&pid=21.1&w=174&h=174' alt=''/>
        </div>
        <div className="txt">
            <body>
                <h4>JK Rowling</h4>
                <h4> Genre: Fiction</h4>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly  />
                <p>First published August 2,2016</p>
                </body>
           </div>
           </div>
           <div className="content">
            <p>“I'm almost finished with it. There aren't very many more entries. 
                   I pick up the journal and place it on the pillow beside me.<br/>
                   “I'm not going to read you,” I whisper.
                       Although, if I read what's left, I'll be finished.
                        Having seen Atlas tonight and knowing he<br/> has a girlfriend and a job and 
                        more than likely a home is enough closure I need on that chapter.
                         And if I just finish the<br/> damn journal, I can put it back in the shoebox
                          and never have to open it again.I finally pick it up and roll onto my back.<br/> 
                          “Ellen DeGeneres, you are such a bitch.”     Dear Ellen, “Just keep swimming.”   
                            Recognize that quote, Ellen? It's what Dory says to<br/> Marlin in Finding Nemo.   
                              “Just keep swimming, swimming, swimming.”<br/></p>
           </div>
           <div>
            <body>
           <h5>Your Ratings:</h5>
           <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></body>
           </div>
           <textarea name="postContent" rows={4} cols={40}/>
           <h5>User Reviews:</h5>
           <div className="jk">

           <img src='https://tse1.mm.bing.net/th?id=OIP.ttYz33RwCujbjz1J9m8lBQHaFK&pid=Api&rs=1&c=1&qlt=95&w=138&h=100' alt=""/>
           
          <p> I always wanted to read this book. Being inspired by my friends and cousins,...I was dying to read this book.<br/> I just wished I'd seen how Lily & Atlas live their lives together. I couldn't believe I was already done.<br/> THAT'S HOW GOOD THIS BOOK GOT ME HOOKED TO KEEP READING. I wasn't getting distracted or confused while reading. <br/>Colleen Hoover is my favorite Author. I Love her so much! No second thoughts. Read this now.</p>
 
           </div>
           <div className="kv">
          <img src="https://tse1.mm.bing.net/th?id=OIP.ttYz33RwCujbjz1J9m8lBQHaFK&pid=Api&rs=1&c=1&qlt=95&w=138&h=100" alt=""/>
           
           <p>Many of my friends recommended me this book, therefore, I finally decided to give it a read. Unfortunately, there<br/> aren't any book shops around where I live so this website proved to be of a great help. I was easily able <br/>to access this book. Thank you so much!</p>
 
           </div>
    </div>
 
    </>
  )
}

export default MainDetails