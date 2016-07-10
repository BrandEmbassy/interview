/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
import TypedReact = require('typed-react')
/// <reference path="../../typings/react/react.d.ts" />
import React = require('react')
/// <reference path="../../typings/classnames/classnames.d.ts" />
import classnames = require('classnames')

interface TextInputProps {
    className?: string
    name?: string
    value?: any
    placeholder?: string
    label?: string
    editing?: boolean
    multiline?: boolean
    dataFormatter?: (data: any) => string
    onChange?: (newValue: string) => void
    validator?: (value: string) => boolean
    invalidWarning?: string
}

interface TextInputState {
    text: string,
    valid: boolean,
}

class TextInput extends TypedReact.Component<TextInputProps, TextInputState> {

    // Reset every time editing changes
    public componentWillReceiveProps(newProps: TextInputProps) {
        if (newProps.editing != this.props.editing) {
            this.setState(this._constructState(newProps.value))
        }
    }

    private _constructState(value: string) : TextInputState {
        return {
            text: value,
            valid: (this.props.validator) ? this.props.validator(value) : true,
        }
    }

    private getInitialState() : TextInputState {
        return this._constructState(this.props.value)
    }

    private _onChange(event) : void {

        const value = event.target.value

        this.setState(this._constructState(value))
    }

    private _onBlur(event) : void {
        this.props.onChange(event.target.value)        
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

        var warning = null
        if (!this.state.valid && this.props.invalidWarning) {
            warning = <span className="error-msg">{this.props.invalidWarning}</span>
        }

        var input = null
        if (this.props.multiline) 
        {
            input = (
                <textarea 
                    className={classnames(this.props.className, {'error': !this.state.valid})}
                    type="text" 
                    name={this.props.name}
                    value={value} 
                    placeholder={this.props.placeholder} 
                    disabled={!this.props.editing}
                    onChange={this._onChange}
                    onBlur={this._onBlur}
                ></textarea>
            )
        }
        else
        {
            input = (
                <input 
                    className={classnames(this.props.className, {'error': !this.state.valid})}
                    type="text" 
                    name={this.props.name}
                    value={value} 
                    placeholder={this.props.placeholder} 
                    disabled={!this.props.editing}
                    onChange={this._onChange}
                    onBlur={this._onBlur}
                />
            )
        }

        return (
            <div>
                {label}
                {warning}
                {input}
            </div>
        )
    }   

}

export = TypedReact.createClass(TextInput)