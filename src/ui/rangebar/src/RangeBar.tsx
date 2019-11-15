import React, { FC } from 'react'
import { Range, getTrackBackground } from 'react-range'

interface IRangeProps {
  initialValue: number
  step: number
  min: number
  max: number
  onSetRange: (value: number) => void
}

const MatrixRange: FC<IRangeProps> = ({ initialValue, step, min, max, onSetRange }: IRangeProps) => {

  const [state, setState] = React.useState({ values: [initialValue] })

  const handleSetRange = (values: number[]) => {
    setState({ values })
    onSetRange(values[0])
  }

  return (
    <div style={{
      display: "flex",
      minWidth: "320px",
      maxWidth: "320px",
      width: "100%",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: "1em"
    }}>
      <Range values={state.values}
        step={step}
        min={min}
        max={max}
        onChange={values => handleSetRange(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: state.values,
                  colors: ["#24292e", "cadetblue"],
                  min: min,
                  max: max
                }),
                alignSelf: "center"
              }}>
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA"
            }}
          >
            <output
              style={{
                width: "15px",
                padding: "5px",
                fontWeight: "bold",
                textAlign: "center",
                color: isDragged ? "black" : "whitesmoke",
                backgroundColor: isDragged ? "cadetblue" : "#24292e",
                borderRadius: "50%"
              }}
              id="output"
            >
              {state.values[0]}
            </output>
          </div>
        )}
      />
    </div>
  )
}
export default MatrixRange
