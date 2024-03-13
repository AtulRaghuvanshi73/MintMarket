import { View, Text, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS } from '../constants'
import { StatusBar } from 'react-native-web'
import {assets} from '../constants'
const Profile = () => {
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: COLORS.white
    }}>
        <StatusBar backgroundColor={COLORS.gray}/>
        <View style={{width: "100%"}}>
        <Image 
            source={assets.nft02}
            resizeMode='cover'
            style={{
                height: 288,
                width: "100%"
            }}
        />
        </View>

        <View style={{
            flex: 1, 
            alignItems: "center"
        }}>
            <Image 
                source={assets.nft05}
                resizeMode='contain'
                style={{
                    height:155,
                    width: 155,
                    borderRadius: 999,
                    borderColor: COLORS.black,
                    borderWidth: 2,
                    marginTop: -70
                }}
            />

            <Text style={{
                ...FONTS.h3,
                color: COLORS.primary,
                marginVertical: 8
            }}>User073</Text>
        </View>

    </SafeAreaView>
  )
}

export default Profile