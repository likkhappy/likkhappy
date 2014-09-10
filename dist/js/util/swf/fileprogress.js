define("util/swf/fileprogress",[],function(){function a(a,b){if(this.fileProgressID=a.id,this.opacity=100,this.height=0,this.fileProgressWrapper=document.getElementById(this.fileProgressID),this.fileProgressWrapper)this.fileProgressElement=this.fileProgressWrapper.firstChild;else{this.fileProgressWrapper=document.createElement("div"),this.fileProgressWrapper.className="progressWrapper",this.fileProgressWrapper.id=this.fileProgressID,this.fileProgressElement=document.createElement("div"),this.fileProgressElement.className="progressContainer";var c=document.createElement("a");c.className="progressCancel",c.href="#",c.style.visibility="hidden",c.appendChild(document.createTextNode(" "));var d=document.createElement("div");d.className="progressName",d.appendChild(document.createTextNode(a.name));var e=document.createElement("div");e.className="progressBarInProgress";var f=document.createElement("div");f.className="progressBarStatus",f.innerHTML="&nbsp;",this.fileProgressElement.appendChild(c),this.fileProgressElement.appendChild(d),this.fileProgressElement.appendChild(f),this.fileProgressElement.appendChild(e),this.fileProgressWrapper.appendChild(this.fileProgressElement),document.getElementById(b).appendChild(this.fileProgressWrapper)}this.height=this.fileProgressWrapper.offsetHeight}return a.prototype.setProgress=function(a){this.fileProgressElement.className="progressContainer green",this.fileProgressElement.childNodes[3].className="progressBarInProgress",this.fileProgressElement.childNodes[3].style.width=a+"%"},a.prototype.setComplete=function(){this.fileProgressElement.className="progressContainer blue",this.fileProgressElement.childNodes[3].className="progressBarComplete",this.fileProgressElement.childNodes[3].style.width="";var a=this;setTimeout(function(){a.disappear()},1e4)},a.prototype.setError=function(){this.fileProgressElement.className="progressContainer red",this.fileProgressElement.childNodes[3].className="progressBarError",this.fileProgressElement.childNodes[3].style.width="";var a=this;setTimeout(function(){a.disappear()},5e3)},a.prototype.setCancelled=function(){this.fileProgressElement.className="progressContainer",this.fileProgressElement.childNodes[3].className="progressBarError",this.fileProgressElement.childNodes[3].style.width="";var a=this;setTimeout(function(){a.disappear()},2e3)},a.prototype.setStatus=function(a){this.fileProgressElement.childNodes[2].innerHTML=a},a.prototype.toggleCancel=function(a,b){if(this.fileProgressElement.childNodes[0].style.visibility=a?"visible":"hidden",b){var c=this.fileProgressID;this.fileProgressElement.childNodes[0].onclick=function(){return b.cancelUpload(c),!1}}},a.prototype.disappear=function(){var a=15,b=4,c=30;if(this.opacity>0)if(this.opacity-=a,this.opacity<0&&(this.opacity=0),this.fileProgressWrapper.filters)try{this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity=this.opacity}catch(d){this.fileProgressWrapper.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+this.opacity+")"}else this.fileProgressWrapper.style.opacity=this.opacity/100;if(this.height>0&&(this.height-=b,this.height<0&&(this.height=0),this.fileProgressWrapper.style.height=this.height+"px"),this.height>0||this.opacity>0){var e=this;setTimeout(function(){e.disappear()},c)}else this.fileProgressWrapper.style.display="none"},a});