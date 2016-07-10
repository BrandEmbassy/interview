/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')

interface TextInputProps {
    className?: string
    name?: string
    value?: any
    placeholder?: string
    label?: string
    editing?: boolean
    multiline?: boolean
    dataFormatter?: (data: any) => string
}

interface TextInputState {
    text: string
}

class TextInput extends TypedReact.Component<TextInputProps, TextInputState> {

    // Reset every time editing changes
    public componentWillReceiveProps(newProps: TextInputProps) {
        if (newProps.editing != this.props.editing) {
            this.setState(this.getInitialState())
        }
    }

    private getInitialState() : TextInputState {
        return {
            text: this.props.value
        }
    }

    private _onChange(event) : void {
        this.setState({
            text: event.target.value
        })
    }

    public render() {
        var value = this.state.text
        if (this.props.dataFormatter && !this.props.editing) {
            value = this.props.dataFormatter(this.state.text)
        }

        var label = null
        if (this.props.label) {
            label = (<label htmlFor={this.props.name}>{this.props.label}</label>)
        }

        var input = null
        if (this.props.multiline) 
        {
            input = (
                <textarea 
                    className={this.props.className}
                    type="text" 
                    name={this.props.name}
                    value={value} 
                    placeholder={this.props.placeholder} 
                    disabled={!this.props.editing}
                    onChange={this._onChange}
                ></textarea>
            )
        }
        else
        {
            input = (
                <input 
                    className={this.props.className}
                    type="text" 
                    name={this.props.name}
                    value={value} 
                    placeholder={this.props.placeholder} 
                    disabled={!this.props.editing}
                    onChange={this._onChange}
                />
            )
        }

        return (
            <div>
                {label}
                {input}
            </div>
        )
    }   

}

export = TypedReact.createClass(TextInput)