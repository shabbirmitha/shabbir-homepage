import React from 'react'
import { ReactTerminal, TerminalContextProvider } from 'react-terminal'
import { signIn, signOut, useSession } from 'next-auth/react'

const Terminal = () => {
  const { data } = useSession()

  const isLoggedIn = React.useMemo(() => Boolean(data && data.user), [data])

  const myStyle = React.useMemo(
    () => ({
      fontSize: '0.9rem',
      color: '#808dad',
      lineHeight: '30px'
    }),
    []
  )

  const terminalCommands = React.useMemo(() => {
    return {
      whoami: {
        help: 'Tells you who are you',
        action: isLoggedIn ? (
          `${data.user.name} <${data.user.email}>`
        ) : (
          <div>
            <p style={myStyle}>You need to be signed in to use this command!</p>
            <span style={{ color: '#38CC77' }}>Just type `sign-in`</span>
          </div>
        )
      },

      'sign-in': {
        help: 'Redirects you to the login page',
        action: isLoggedIn ? (
          <div>
            <p style={myStyle}>You Are Alredy Signed In</p>
          </div>
        ) : (
          signIn
        )
      },

      'sign-out': {
        help: 'Sign out the current user',
        action: !isLoggedIn ? (
          <div>
            <p style={myStyle}>You need to be signed in to use this command!</p>
            <span style={{ color: '#38CC77' }}>Just type `sign-in`</span>
          </div>
        ) : (
          signOut
        )
      },

      'get-location': {
        help: 'Gets your current location',
        action: async () =>
          new Promise(resolve =>
            navigator.geolocation.getCurrentPosition(
              pos =>
                resolve(
                  `Your current position is ${pos.coords.latitude}, ${pos.coords.longitude}`
                ),
              error => resolve(`Error: ${error.message}`)
            )
          )
      }
    }
  }, [data?.user?.email, data?.user?.name, isLoggedIn, myStyle])

  return (
    <TerminalContextProvider>
      <ReactTerminal
        prompt={
          data && data.user ? `$ ${data.user.name} >> ` : '$ user-terminal >> '
        }
        welcomeMessage={
          <div>
            <p style={myStyle}>
              Welcome to my website! Get started by typing `help` command below
            </p>
          </div>
        }
        themes={{
          darkDefault: {
            themeBGColor: '',
            themeToolbarColor: '',
            themeColor: '#38CC77',
            themePromptColor: '#fff'
          }
        }}
        theme="darkDefault"
        commands={{
          ...Object.keys(terminalCommands).reduce(
            (b, key) => ({ ...b, [key]: terminalCommands[key].action }),
            {}
          ),
          help: (
            <div style={{ marginTop: '5px' }}>
              <p style={myStyle}>Available Commands:</p>
              {Object.keys(terminalCommands).map(key => (
                <p style={myStyle} key={key}>
                  <span style={{ color: '#38CC77' }}>{key}:</span>{' '}
                  {terminalCommands[key].help}
                </p>
              ))}
              <p style={myStyle}>
                <span style={{ color: '#38CC77' }}>clear:</span> clears out
                everything on screen!
              </p>
            </div>
          )
        }}
      />
    </TerminalContextProvider>
  )
}

export default Terminal
