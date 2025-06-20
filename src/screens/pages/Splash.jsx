import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HowItWorks');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />

      <View style={styles.centerContent}>
        {/* Logo Image */}
        <Image
  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9512/9512660.png' }}
  style={styles.heroImage}
/>
{/* <Image
  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }}
  style={styles.heroImage}
/> */}





        {/* App Name & Tagline */}
        <Text style={styles.appName}>AlignTrack</Text>
        <Text style={styles.tagline}>Smart Posture Assistant</Text>

        {/* Lottie Loader */}
        <View style={styles.loaderWrapper}>
          <LottieView
            source={{ uri: 'https://assets9.lottiefiles.com/packages/lf20_usmfx6bp.json' }}
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text style={styles.loadingText}>Preparing your experience...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A', // Deep blue to contrast with loader
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroImage: {
    width: width * 0.52,
    height: height * 0.26,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  loaderWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 80,
    height: 80,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.85,
  },
});
