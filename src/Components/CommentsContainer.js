import React from 'react'

const CommentsData =[
    {
        name: "Nischal Yadav",
        comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        reply: [ ]

    },
    {
        name: "Nischal Yadav",
        comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        reply: [ ]

    },
    {
        name: "Nischal Yadav",
        comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        reply: [ ]

    },
    {
        name: "Nischal Yadav nested",
        comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        reply: [
            {
                name: "Nischal Yadav",
                comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
                reply: [ 
                    {
                        name: "Nischal Yadav",
                        comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
                        reply: [ 
                            {
                                name: "Nischal Yadav",
                                comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
                                reply: [ ]
                        
                            },
                        ]
                
                    },
                    {
                        name: "Nischal Yadav",
                        comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
                        reply: [ ]
                
                    }
                ]
        
            },
            {
                name: "Nischal Yadav",
                comments:  "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
                reply: [ ]
        
            }
        ]

    }
]

const Comments =({data}) =>{
    const { name, comments, reply} = data;
    return (
        <div className='flex shadow-sm bg-gray-50 p-2 m-5 rounded-sm'> 
            <img className= "w-8 h-8" alt="viewer-logo" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
           <div className='px-3'>
           <p className='font-bold'>{name}</p>
           <p>{comments}</p>
           </div>
        </div>

    )

}

const CommentsList =({comments}) =>{

    return comments.map((com,index) =>(
      <div key ={index}>
       
        <Comments  data={com}/>
        
        <div className='pl-5 ml-5 border-l-2'>
            <CommentsList comments={com.reply}/>
        </div>
        </div>
    ));
    
};

function CommentsContainer() {
  return (

    <div className='m-5 p-2'> 
        <h1 className='font-bold text-2xl'>Comments</h1>
       <CommentsList comments={CommentsData}/>
    </div>
  )
}

export default CommentsContainer