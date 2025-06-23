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
  Dimensions,
} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const YogaHomepage = ({ navigation }) => {
  const handleStartMonitoring = () => {
    navigation.navigate('PostureMonitoring', { setYoga: true });
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
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9791/9791045.png' }}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        {/* Heading */}
        <Text style={styles.heading}>Yoga Posture Guidance</Text>

        {/* Description Paragraph */}
        <Text style={styles.description}>
          Practicing yoga with incorrect posture can reduce its benefits and increase risk of injury. This app uses AI to analyze your body alignment in real-time while you perform yoga asanas.
          {"\n\n"}
          It gives instant feedback like "Good Alignment" or "Adjust Your Pose" to help you stay focused and safe during your practice.
          {"\n\n"}
          All processing is done locally on your device. Your video and yoga posture data is never uploaded anywhere, keeping your practice private and secure.
        </Text>

        {/* Secondary Image */}
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7041/7041650.png' }}
          style={styles.secondaryImage}
          resizeMode="contain"
        />

        {/* Privacy Note */}
        <View style={styles.privacyBox}>
          <Text style={styles.lockIcon}>🧘</Text>
          <Text style={styles.privacyText}>
            Train mindfully — AI feedback, no cloud storage.
          </Text>
        </View>
      </ScrollView>

      {/* Start Yoga Monitoring Button */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartMonitoring}
          activeOpacity={0.9}
        >
          <Text style={styles.startButtonText}>Begin Yoga Posture Check</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default YogaHomepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollViewContent: {
    minHeight: SCREEN_HEIGHT,
    paddingBottom: 20,
    paddingTop: 50,
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
    backgroundColor: '#FEF3C7',
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
    color: '#92400E',
    fontWeight: '500',
    flex: 1,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: '#A855F7', // Purple for yoga theme
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
