import React from 'react';
import ReactDOM  from 'react-dom';
import faker from 'faker';
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

const App= () =>{

    return (
        <div className='ui container comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img alt='avatar' src={faker.image.image()}/>
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        Sam
                    </a>
                    <div className='metadata'>
                        <span className='date'>Today at 6:00PM</span>
                    </div>
                    <div className='text'>Nice Blog post</div>
                </div>
            </div> 
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img alt='avatar' src={faker.image.image()}/>
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        Sam
                    </a>
                    <div className='metadata'>
                        <span className='date'>Today at 6:00PM</span>
                    </div>
                    <div className='text'>Nice Blog post</div>
                </div>
            </div> 
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img alt='avatar' src={faker.image.image()}/>
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        Sam
                    </a>
                    <div className='metadata'>
                        <span className='date'>Today at 6:00PM</span>
                    </div>
                    <div className='text'>Nice Blog post</div>
                </div>
            </div> 
        </div>
    );
}


root.render(<App/>);
