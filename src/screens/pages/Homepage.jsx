import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  Dimensions
} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const HowItWorksScreen = ({ navigation }) => {
  const handleStartMonitoring = () => {
    navigation.navigate('PostureMonitoring', { setYoga: false });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Image */}
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8181/8181148.png' }}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        {/* Heading */}
        <Text style={styles.heading}>Posture Monitoring Made Easy</Text>

        {/* Description Paragraph */}
        <Text style={styles.description}>
          Sitting or standing incorrectly for long hours can cause discomfort, fatigue, and long-term health issues. This app uses your camera and intelligent posture tracking to analyze your body's alignment throughout the day. 
          {"\n\n"}
          It continuously monitors key points of your body and gives instant on-screen feedback like "Good Posture" or "Bad Posture" based on your position. This helps you build healthier habits by encouraging you to sit upright and stay aligned naturally.
          {"\n\n"}
          All detection runs directly on your phone, so your image and posture data never leave your device. It’s fast, private, and designed to guide you without interruptions.
        </Text>

        {/* Secondary Image */}
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/11698/11698701.png' }}
          style={styles.secondaryImage}
          resizeMode="contain"
        />

        {/* Privacy Note */}
        <View style={styles.privacyBox}>
          <Text style={styles.lockIcon}>🔐</Text>
          <Text style={styles.privacyText}>
            100% local processing — Your posture data stays on your device.
          </Text>
        </View>
      </ScrollView>

      {/* Start Button */}
      {/* Start Monitoring Button */}
{/* Start Button */}
{/* Start Button */}
<View style={styles.buttonWrapper}>
  <TouchableOpacity
    style={styles.startButton}
    onPress={handleStartMonitoring}
    activeOpacity={0.9}
  >
    <Text style={styles.startButtonText}>Begin Posture Check</Text>
  </TouchableOpacity>
</View>



    </SafeAreaView>
  );
};

export default HowItWorksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollViewContent: {
    minHeight: SCREEN_HEIGHT,
    paddingBottom: 20,
    paddingTop:50
  },
  bannerImage: {
    width: '100%',
    height: 260,
    marginTop: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1F2937',
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 26,
    paddingHorizontal: 24,
    marginBottom: 28,
  },
  secondaryImage: {
    width: '100%',
    height: 220,
    marginBottom: 24,
  },
  privacyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F2FE',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 24,
    marginBottom: 40,
  },
  lockIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  privacyText: {
    fontSize: 14,
    color: '#0369A1',
    fontWeight: '500',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonWrapper: {
  alignItems: 'center',
  marginBottom: 40,
},

startButton: {
  backgroundColor: '#14B8A6', // Teal color
  paddingHorizontal: 24,
  paddingVertical: 12,
  borderRadius: 30,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 5,
},

startButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
},


  
});
