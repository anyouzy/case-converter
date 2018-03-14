class ConvertCase{
	constructor(id){
		this.el = document.getElementById(id);
		this.iCount = 1;
	}
	getStartIndex(){
		return this.el.selectionStart;
	}
	getEndIndex(){
		return this.el.selectionEnd;
	}
	convert(start,selected,end){
		switch(this.iCount)
		{
			case 1:
				this.el.value = start + selected.toLowerCase() + end;
				this.iCount++;
			break;
			case 2:
				this.el.value = start + selected.replace(/(^|\s+)\w/g,s=>s.toUpperCase())+ end;
				this.iCount++;
			break;
			case 3:
				this.el.value = start + selected.toUpperCase() + end;
				this.iCount = 1;
			break;
		}
	}
	exe(){
		this.el.addEventListener('keydown',(e)=>{
			if(e.shiftKey && e.ctrlKey)
			{
				e.preventDefault();
				let iStart = this.getStartIndex();
				let iEnd = this.getEndIndex();
				let sStart = this.el.value.substring(0,iStart);
				let sSelected = this.el.value.substring(iStart,iEnd);
				let sEnd = this.el.value.substring(iEnd,this.el.value.length);
				this.convert(sStart,sSelected,sEnd);
				this.el.setSelectionRange(iStart,iEnd);
			}
		});
	}
}
let oTitle = new ConvertCase('title');
let oCode = new ConvertCase('couponCode');
let oDes = new ConvertCase('description');
oTitle.exe();
oCode.exe();
oDes.exe();