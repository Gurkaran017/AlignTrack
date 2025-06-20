import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formatTime } from '../utils/TimeUtils.jsx';

const TopBar = ({ isMonitoring, sessionTime, cameraPosition, onBack, onToggleCamera }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Ionicons name="arrow-back" size={18} color="#fff" />
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      {/* Session Timer */}
      {isMonitoring && (
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionLabel}>⏱️ Session</Text>
          <Text style={styles.sessionTime}>{formatTime(sessionTime)}</Text>
        </View>
      )}

      {/* Camera Switch */}
      <TouchableOpacity style={styles.button} onPress={onToggleCamera}>
        <Ionicons name="camera-reverse" size={18} color="#fff" />
        <Text style={styles.buttonText}>Flip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#10B981', // stylish emerald green
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    marginHorizontal: 12,
    marginTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 6,
  },
  sessionInfo: {
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
  },
  sessionLabel: {
    fontSize: 12,
    color: '#E0F2F1',
    fontWeight: '500',
    marginBottom: 2,
  },
  sessionTime: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
