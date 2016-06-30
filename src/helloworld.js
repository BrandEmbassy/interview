

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
			<ListContent />
			<ListFooter />
			</div>
		);
	}
}

class ListContent extends React.Component {
	render() {
		return (
			<div className="list__content">

				<Item />
			</div>
		
		)
	}
}

class Item extends React.Component {
	render() {
		return (
			<div className="item">

			<ItemIn />
			</div>
			
		)
	}
}

class ItemIn extends React.Component {
	render() {
		return (
			<div className="in">
			<ProfilePic />
			Roman Nikrmajer
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
		return (
			<div className="detail">

				<DetailItem />
			</div>
		
		)
	}
}

class DetailItem extends React.Component {
	render() {
		return (
		<div className="item">

			<DetailItemHeader />
			<DetailItemContent />
			<DetailItemFooter />
		</div>
		)
	}
	
}

class DetailItemHeader extends React.Component {
	render() {
		return (
			<div className="item__header">

				<ProfilePic />
				<Input />
			</div>
		)
	}
}

class Input extends React.Component {
	render() {
		return (
			<input className="name" type="text" name="" value="Patrik Vrbovsky" placeholder="Full Name" disabled />
		)
	}
}

class DetailItemContent extends React.Component {
	render() {
		return (
			<div className="item__content">

				<DetailInputWrap />
			</div>
		
		)
	}
}

class DetailInputWrap extends React.Component {
	render() {
		return (
			<div className="input-wrap">
				<label formName="bio">
					Bio
				</label>
                <textarea name="bio" className="bio" placeholder="Decsription" value="dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu" disabled>
				</textarea>
			</div>
		
		)
	}
}

class DetailItemFooter extends React.Component {
	render() {
		return (
			<div className="item__footer">

				<ButtonEdit />
				<ButtonDelete />
			</div>
		)
	}
}

class ButtonEdit extends React.Component {
	editContact () {
		console.log("Edit not implemented yet.");
		console.log(JSON.stringify(controller.data));
	}
	render() {
		return (
			<div className="button" onClick={this.editContact}>
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
	render() {
		return (
			<div className="app">
				<ContactListSite />
				<Detail />
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