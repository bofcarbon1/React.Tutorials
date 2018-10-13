The tempcalc application is part of the React tutorial series from facebook

The objective is to learn about lifting state to a component that might have
functions that need to use a common component. This component contains the
source of truth of the app. 

The app converts temperature from celcius to fahrenheit and vice versa

Components 
1. TemperatureInput
  Takes a temperature input in celcius or farenheit and calls an onChange function where is set React props
2. App 
   Is the (calculator component renamed). It registers a celcius and fahrenheit change listenr function that sets state
   The render() sets scale and temparerature from state, Celcius or fahrenheit from a tryConvert function
   It returns a TemperatureInput for celcius and fahrenheit and a boiling verdict component ()
3. toCelcius (Function)
   Converts fahrenheit to celcius
4. toFahrenheit (Function)
   Converts celcius to fahrenheit
5. tryConvert (function) 
   Takes a temperature and convert (either the toCelcius or toFahrenheit function) as arguments
   If a temperature was passed it takes it, converts its then rounds it to a desired precision.
   The result is set to a constant which is what is replaced in the TemperatureInput user control
   in the App component
6. BoilingVerdict (function)
   Checks if celcius is greater than or equal to 100 and returns a corresponding message. 
              