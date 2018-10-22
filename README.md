# Introduction
This application is an example of how to use the library https://github.com/AxaGuilDEv/react-oidc

# What we want
Nous allons réaliser une petite application web qui s’appellera psychobot et qui sera constituée de 2 pages.
•	1 page de login
•	1 page de discussion
La page de discussion ne sera accessible que si l’on est bien authentifié. En informatique il y a 2 concept distinct :
•	L’authentification : est-ce que je suis identifié ?
•	L’autorisation : est-ce que j’ai le droit de réaliser cette action ?
Nous allons utiliser les technologies suivantes :
https://github.com/facebook/create-react-app
https://github.com/AxaGuilDEv/react-oidc

# What is OIDC
OIDC mean Open ID Connect, it is an identity layer standard above OAuth 2.0 Protocole. You will find more information here. 
https://openid.net/connect/
At AXA France, we use Open Id Connect to federate all kind of authentication. It allows us to switch from authentication system without modifying you code. It also normalizes all authentication system to OAuth protocol, that is cool because the consequence is that HTTP response are restfull.  Restsfull response are very important when you develop SPA (Single Page application) web site. We are sure that HTTP 401 Response mean that you are not authenticate.

# What is OAuth
OAuth 2.0 is a standard protocol for authorization. You can find more information here https://oauth.net/2/

# What is @axa-fr/react-oidc
It is a react library that implement OIDC standard at the client side using OAUTH “implicite” flow. It aims to be very simple and flexible to use.
https://github.com/AxaGuilDEv/react-oidc

Create react app 2
