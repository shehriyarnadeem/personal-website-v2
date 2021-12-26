import React from 'react'
import Button from './UI/Button'
function Footer() {
    return (

        <footer className="p-10 footer  text-neutral-content h-[24rem]  dark:bg-footer bg-footer drop-shadow-2xl">
            <div className=" mx-auto justify-items-center space-y-7 max-w-[38rem]">
                <h3 className="font-semibold text-center">Get in touch 👋</h3>
                <p className="text-center text-[18px] dark:text-gray-300 text-gray-800 tracking-[1px]">Feel free to email me about anything. Do you have some feedback or suggestions? You can join mme on twitter </p>
                <Button title="Say Hello" className="btn btn-wide btn-lg dark:bg-green-900 bg-gray-600  font-semibold font-heebo tracking-[2px]" onClickHandler={()=> window.location.assign('https://mail.google.com/mail/?view=cm&fs=1&to=shehriyarnadeemy@gmail.com')}/>
            </div>


        </footer>

    )
}

export default Footer
