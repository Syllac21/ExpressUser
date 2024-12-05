function loginView(){
    return `<html>
        <body>
            <form action='/login' method='POST'>
                <input type='text' name='name' placeHolder='nom'></input>
                <input type='text' name='password' placeHolder='mot de passe'></input>
                <button type='submit'>Envoyer</button>
            </form>
        </body>
    </html>`
}

module.exports = loginView;