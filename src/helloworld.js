

/*
// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h2>Comments</h2>
		<CommentList data={this.props.data}/>
		<CommentForm />
      </div>
    );
  }
});

// tutorial2.js
var CommentList = React.createClass({
  render: function() {
	  console.log(this.props.data);
	  var commentNodes = this.props.data.map(function(comment) {
		  return (
			<Comment author={comment.author} key={comment.id} > 
			  {comment.text}
			</Comment>
			)
	  });
	  
	  console.log(commentNodes);
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
		<Comment author="Ghormoon">Ó bože jaká já jsem to ale *buzna*.</Comment>
		<Comment author="Rejpal">Ó synu, to by mohl říct každý.</Comment>
		{commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

// tutorial4.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
	  
    );
  }
});

Comment.prototype.footer = function () {
	return "ENDOFLINE";
}

// tutorial8.js
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('example')
);

*/



class Heading extends React.Component {
	render() {
		return (
			<div className="heading">
			Contact List
			</div>
		
		)
	}
}

class ListHeader extends React.Component {
	render() {
		return (
			<div className="list__header">

				<Heading />
			</div>
		)
	}
}

class ContactListSite extends React.Component{
	render() {
		
		return (
			<div className="list">
			
			<ListHeader />
			<ListContent data={this.props.data} active={this.props.activeContact} onclickMethod={this.props.changeActive}/>
			<ListFooter />
			</div>
		);
	}
}

class ListContent extends React.Component {
	render() {
		let contats = this.props.data.contactList
		let id = 0
		let activeID = this.props.active
		let onclickMethod = this.props.onclickMethod
		
		return (
			<div className="list__content">
				{
					contats.map(function (contats) {
						return <Item myID={id} key={id++}  data={contats} active={activeID} onclickMethod={onclickMethod}/>
					})
				}
				
				
			</div>
		
		)
	}
}

class Item extends React.Component {
	reportClick() {
		this.props.onclickMethod(this.props.myID);
	}
	
	render() {
		
		let itemClass = null;
		
		if (this.props.myID === this.props.active){
			itemClass = "item item--active";
			
		} else {
			itemClass = "item";
			
		}
		
		
		return (
			
			<div className={itemClass} onClick={this.reportClick.bind(this)} >
			<ItemIn data={this.props.data}/>
			</div>
			
		)
	}
}

class ItemIn extends React.Component {
	render() {
		return (
			<div className="in">
			<ProfilePic />
			{this.props.data.fullName}
			</div>
		
		)
	}
}

class ProfilePic extends React.Component {
	render() {
		return (
			<div className="profile-pic">
			pic
			</div>
		
		)
	}
}

class ListFooter extends React.Component {
	render() {
		return (
			<div className="list__footer">
				<AddBtn />
			</div>
		
		)
		
	}
}

class AddBtn extends React.Component {
	render() {
		return (
			<div className="add-bttn">
				<span className="in">
					Add new contact
			    </span>
			</div>
		
		)
	}
}

class Detail extends React.Component {
	
	render() {
		let contats = this.props.data.contactList
		
		return (
			<div className="detail">
				{/*
					contats.map(function (contats) {
						return <DetailItem data={contats}/>
					} )
				*/}
				<DetailItem data={contats[this.props.activeContact]}/>
			</div>
		
		)
	}
}

class DetailItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			disabled: true,
			do_setDisabled: this.setDisabled.bind(this)
		};
		//this.state.do_setDiabled = ;
	}
	
	/**
	 * Sets all Availible fields to editable.
	 */
	setDisabled (value) {
		this.setState({
			disabled: value
		});
	}
	
	render() {
		return (
		<div className="item">

			<DetailItemHeader data={this.props.data} disabledVal={this.state.disabled}/>
			<DetailItemContent data={this.props.data} disabled={this.state.disabled}/>
			<DetailItemFooter onclickedit={this.state.do_setDisabled} onclickdelete={this.do_setDisabled} disabled={this.state.disabled}/>
		</div>
		)
	}
	
}

class DetailItemHeader extends React.Component {
	render() {
		return (
			<div className="item__header">

				<ProfilePic />
				
				
				<Input value={this.props.data.fullName} infoName={""} infoClass={"name"} infoPH={"Full Name"} infoType={"text"} disabled={this.props.disabledVal}/>
			</div>
		)
	}
}

class Input extends React.Component {
	render() {
		
		return (
			<input className={this.props.infoClass} type={this.props.infoType} name={this.props.infoName} value={this.props.value} placeholder={this.props.infoPH} disabled={this.props.disabled} onChange={this.render}/>
		)
	}
}

class DetailInputWrapWithLabel extends React.Component {
	render() {
		return (
			<div className="input-wrap">
				<label forName={this.props.infoClass}>
					{this.props.infoLabel}
				</label>
				<input className={this.props.infoClass} type={this.props.infoType} name={this.props.infoName} value={this.props.infoValue} placeholder={this.props.infoPH} disabled={this.props.infoEnabled} />
			</div>
		)
	}
}
class DetailItemContent extends React.Component {
	render() {
		return (
			<div className="item__content">
				<DetailInputWrap infoName={"bio"} infoClass={"bio"} infoPH={"Description"} infoValue={this.props.data.bio} infoLabel={"Bio"} infoEnabled={this.props.disabled}/>
				<DetailInputWrapWithLabel infoType={"text"} infoName={"tel"} infoClass={"tel"} infoPH={"+XXX XXX XXX XXX"} infoValue={this.props.data.phone} infoLabel={"Phone"} infoEnabled={this.props.disabled}/>
				<DetailInputWrapWithLabel infoType={"text"} infoName={""} infoClass={"email"} infoPH={"E-mail"} infoValue={this.props.data.email} infoLabel={"E-mail"} infoEnabled={this.props.disabled}/>
				
				
			</div>
		
		)
	}
}

class DetailInputWrap extends React.Component {
	
	render() {
		
		return (
			<div className="input-wrap">
				<label forName={this.props.infoName}>
					{this.props.infoLabel}
				</label>
                <textarea name={this.props.infoName} className={this.props.infoClass} placeholder={this.props.infoPH} value={this.props.infoValue} disabled={this.props.infoEnabled} onChange={this.render}>
				</textarea>
			</div>
		
		)
	}
}

class DetailItemFooter extends React.Component {
	
	render() {

		return (
			<div className="item__footer">

				<ButtonEdit onclickMethod={this.props.onclickedit}/>
				<ButtonDelete onclickMethod={this.props.onclickdelete}/>
			</div>
		)
	}
}

class ButtonEdit extends React.Component {
	constructor(props){
		super(props);
		this.swapTo = false;
		
		//this.state.do_setDiabled = ;
	}
	
	editContact () {
		console.log("Edit not implemented yet.");
		//console.log(JSON.stringify(controller.data));
		
		this.props.onclickMethod(this.swapTo);
		this.swapTo = !this.swapTo;
	}
	
	render() {

		return (
			<div className="button" onClick={this.editContact.bind(this)} >
				Edit
			</div>
		)
	}
}

class ButtonDelete extends React.Component {
	deleteContact() {
		console.log("deleteContact is note implemented yet");
	}
	render() {
		return (
			<div className="button button--negative" onClick={this.deleteContact}>
				Delete
			</div>
		)
	}
}









class Application extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			active: 0,
			changeActive: this.myChangeActive.bind(this)
		}
	}
	myChangeActive(val) {
		let maxVal = this.props.data.contactList.length;
		
		if (val < 0 || val >= maxVal) {
			return
		} 
		this.setState({
			active: val
		});
		this.state.active = val;
		
	}
	render() {
		//this.myChangeActive(1);
		return (
			<div className="app">
				<ContactListSite data={this.props.data} activeContact={this.state.active} changeActive={this.state.changeActive}/>
				<Detail data={this.props.data} activeContact={this.state.active}/>
			</div>
		
		)
	}
	
}
/*

*/
ReactDOM.render(
	<Application data={controller.data}/>, 	//<div><ContactListSite /><Detail /></div>,
	document.body					//document.getElementById("app")
);

/*ReactDOM.render(
	<div><ContactListSite /><Detail /></div>,
	document.getElementById("app")

);*/