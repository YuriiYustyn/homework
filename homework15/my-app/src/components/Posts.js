import React from "react";

import { Like, Coment, Repost } from './ActionPanel.js'
export const Post = ({ name, fotoAuthor, nickname, content, fotoContent }) => {
   return (
      <div className='divAuthor'>
         <img className='authorFoto' src={fotoAuthor} alt='foto' />
         <span className='authorName'>{name}</span>
         <i className='nickName'>{nickname}</i>
         <span className="spanDate">{new Date().toUTCString()}</span>
         <p className='content'>{content}</p>
         <img className='postFoto' src={fotoContent} alt='foto' />
         <div className="panel">
            <span>12{Coment()}</span>
            <span>583{Like()}</span>
            <span>4{Repost()}</span>
         </div>
      </div>)
}



