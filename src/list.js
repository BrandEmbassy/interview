/*
	START OF LIST CODE
*/



/**
 * @describe - Main Element of contact overwiev
 */
class ContactListSite extends React.Component{
	render() {
		
		return (
			<div className="list">
			
			<ListHeader />
			<ListContent 
				data={this.props.data} 
				active={this.props.activeContact} 
				onclickMethod={this.props.changeActive}/>
				
			<ListFooter changeActive={this.props.changeActive}/>
			</div>
		);
	}
}

/**
 * Defines headline of contact overview
 */
class ListHeader extends React.Component {
	render() {
		return (
			<div className="list__header">
				<div className="heading">
					Contact List
				</div>
			</div>
		)
	}
}

/**
 * Holds content of contactList overview
 */
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
						return <Item 
									myID={id} 
									key={id++} 
									data={contats} 
									active={activeID} 
									onclickMethod={onclickMethod}/>
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
			
			<div 
				className={itemClass} 
				onClick={this.reportClick.bind(this)} >
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
				<AddBtn changeActive={this.props.changeActive}/>
			</div>
		
		)
		
	}
}

class AddBtn extends React.Component {
	
	addContact() {
		let index = controller.addContact()
		this.props.changeActive(index)
		console.log(index)
		
	}
	
	render() {
		return (
			<div className="add-bttn" onClick={this.addContact.bind(this)}>
				<span className="in">
					Add new contact
			    </span>
			</div>
		
		)
	}
}

/*
	END OF LIST CODE
*/

