import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { goerli } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal, W3mButton } from '@web3modal/wagmi-react-native'


import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const projectId = '090ef6025b76598905f0f585acd29251'

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [goerli]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})



const Mint = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
    <View style={styles.container}>
      <W3mButton balance='show'/>
    </View>
    <Web3Modal />

    </WagmiConfig>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Mint