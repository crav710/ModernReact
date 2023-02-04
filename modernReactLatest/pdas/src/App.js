import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';



function App(){
    return (
        <div >
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">
                            Personal Digiatkl Assistants
                        </p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} 
                                description="Alexa was created by amazon and is very grumpy"
                            />                        
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}
                                            description="made by microsoft"
                                />                        
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}
                                        description="made by apple."
                                    />                        
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    );
}
export default App;