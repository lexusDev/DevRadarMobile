import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {WebView } from 'react-native-webview';

export default function Profile(){
    const route = useRoute();

    const githubUsername = route.params.github_username; 
    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }}/>
}