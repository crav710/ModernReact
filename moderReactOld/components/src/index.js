import React from 'react';
import ReactDOM  from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css'
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

const App= () =>{

    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Nice Blog" imgSrc={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ram" timeAgo="Yesterday at 5:00PM" commentText="Interesting" imgSrc={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
}


root.render(<App/>);
