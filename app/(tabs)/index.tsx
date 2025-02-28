import { StyleSheet } from 'react-native';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {


    const [calculator_input, onChangeCalculatorInput] = React.useState(0);


    function handleButtonClick(input: any) {
        onChangeCalculatorInput(Number(calculator_input + input.target.value))
    }



    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <TextField id="outlined-basic" variant="filled" value={calculator_input} />
                <ButtonGroup variant="outlined" size="large" fullWidth aria-label="Basic button group">
                    <Button onClick={handleButtonClick} value="7">7</Button>
                    <Button onClick={handleButtonClick} value="8">8</Button>
                    <Button onClick={handleButtonClick} value="9">9</Button>
                    <Button onClick={handleButtonClick} value="÷">÷</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" size="large" fullWidth aria-label="Basic button group">
                    <Button onClick={handleButtonClick} value="4">4</Button>
                    <Button onClick={handleButtonClick} value="5">5</Button>
                    <Button onClick={handleButtonClick} value="6">6</Button>
                    <Button onClick={handleButtonClick} value="-">-</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined"  size="large" fullWidth aria-label="Basic button group">
                    <Button onClick={handleButtonClick} value="1">1</Button>
                    <Button onClick={handleButtonClick} value="2">2</Button>
                    <Button onClick={handleButtonClick} value="3">3</Button>
                    <Button onClick={handleButtonClick} value="+">+</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" size="large" fullWidth aria-label="Basic button group">
                    <Button onClick={handleButtonClick} value="0">0</Button>
                    <Button onClick={handleButtonClick} value=".">.</Button>
                    <Button onClick={handleButtonClick} value="=">=</Button>
                </ButtonGroup>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    
});
