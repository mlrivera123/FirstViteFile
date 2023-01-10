import '../index.css'

export default function Main(){
    return(
        <main>
            <h1 className='body--header'>Fun facts about React</h1>
            <ul className='body--list'>
                <li className='body--list--point'>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}