import React from 'react';

const List = ({ meetings }) => {
  return(
    <>
    {meetings.map((meeting)=>{
      const {id,name,subject,image,time} = meeting;
      return(
        <article key={id} className='meeting'>
          <img src={image} alt={name} />
          <div>
            <h4>{subject}</h4>
            <p>{name}</p>
            <p>{time}</p>
          </div>
        </article>
      );
    })}
    </>
  );
};

export default List;