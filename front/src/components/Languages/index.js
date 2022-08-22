import fr from './fr.json';
import en from './en.json';
import drapeau from '../../media/flags/fr.png';
import flag from '../../media/flags/en.png';
import React from 'react';
import SubMenu from '../Menu/SubMenu';
import Image from 'next/image';

export const LocalesData = {
    fr: () => import("./fr.json"),
    en: () => import("./en.json"),
  };

var content = {
    "Français" : {
        file : fr,
        image : drapeau
    },
    "English" : {
        file : en,
        image : flag
    }
}

let local_language = null
if (typeof window !== 'undefined') {
    // Perform localStorage action
    local_language = localStorage.getItem('language')
}
export default local_language? content[local_language].file : content['English'].file

//TODO: FlagSelection component
class FlagSelection extends React.Component{ 
    constructor(){
        super();
        this.state={
            opened : false
        }
    }

    dropdownToggle = () => {
        this.setState({opened : !this.state.opened})
        console.log("opened ? ")
    }

    changeLanguage = (language) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', language)
            window.location.reload(false);
        }
    }

    render(){
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            local_language = localStorage.getItem('language')
        }
        return(
            <div>
                <div className={this.state.opened ? "dropdown-toggle opened" : "dropdown-toggle"} onClick={this.dropdownToggle}>
                    <Image alt="flag selection" src={local_language? content[local_language].image : content['English'].image} />
                </div>
                <SubMenu opened={this.state.opened}>
                    {Object.keys(content).map((language, id) => {
                        if(language !== local_language){
                            return <Image key={id} alt="flag selection" src={content[language].image} />
                        }
                        return <div key={id}/>
                    })}
                </SubMenu>
            </div>
        )
    }
}
export {
    FlagSelection
}