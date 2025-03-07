import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { TextField, Button, ButtonGroup } from "@mui/material";

export default function Calculator() {
  const [calculatorInput, setCalculatorInput] = useState("");

  const handleButtonClick = (event: any) => {
    const value = event.target.value;
    if (value === "=") {
      try {
        setCalculatorInput(eval(calculatorInput).toString());
      } catch {
        setCalculatorInput("Error");
      }
    } 
    else if (value === "C") {
        setCalculatorInput("");
    }
    else {
      setCalculatorInput((prev) => prev + value);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextField
            variant="filled"
            value={calculatorInput}
            fullWidth
            inputProps={{ style: { fontSize: 36, textAlign: "right"} }}
          />
        </View>
        <View style={styles.buttonContainer}>
          {[
            ["C"],
            ["7", "8", "9", "/"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "="],
          ].map((row, rowIndex) => (
            <ButtonGroup
              key={rowIndex}
              variant="outlined"
              size="large"
              fullWidth
              style={styles.buttonGroup}
            >
              {row.map((value) => (
                <Button key={value} onClick={handleButtonClick} value={value} style={styles.button}>
                  {value}
                </Button>
              ))}
            </ButtonGroup>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  buttonGroup: {
    width: "100%",
  },
  button: {
    flex: 1,
    fontSize: 24,
  },
});
