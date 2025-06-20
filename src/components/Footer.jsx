import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

const BottomControls = ({ isMonitoring, alertsCount, postureStatus, onStartStop }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={onStartStop}
        style={[
          styles.actionButton,
          { backgroundColor: isMonitoring ? "#F87171" : "#34D399" },
        ]}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>
          {isMonitoring ? "Stop Session" : "Start Session"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomControls

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  actionButton: {
    alignSelf: "center",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
})
