(function ($) {
    var clipBox = function (appendedTarget,origBoxWidth,origBoxHeight,previewBoxWidth,previewBoxHeight) {
        var self = this;
        this.appendTarget = appendedTarget;
        //设置盒子宽高
        this.origBoxWidth = origBoxWidth;
        this.origBoxHeight = origBoxHeight;
        this.previewBoxWidth = previewBoxWidth;
        this.previewBoxHeight = previewBoxHeight;

        //canvas
        this.previewCanvas = null;//canvas画布
        this.previewCanvasPen = null;//canvas画笔
        this.clipWidth = null;
        this.clipHeight = null;
        this.startX = null;
        this.startY = null;


        //元素
        this.origBox = null;
        this.previewBox = null;
        this.picUp = null;
        this.reader = new FileReader();//文件读取

        //图像属性
        this.URL = null;//获取图像URL
        this.img = new Image();
        this.shrinkPicWidth = null;//缩小后宽高
        this.shrinkPicHeight = null;
        this.scale = 1;//缩放比例
        this.resultScale = 1;//最终缩放比例
        this.margin_left = null;//使图像居中
        this.margin_top = null;
        this.jcrop_holder = null;//jcrop的div
        this.jcrop_tracker = null;//移动盒子
        this.jcropObject = null;



        this.init();
        this.getElement();


        //事件绑定
        this.getOrigPicURL();
        // this.imgIntoOrigBox();

        this.upButton.onclick = function (ev) {
            self.trasform_upload();
        };

        //读取完成的事件绑定
        this.reader.onload = function (ev2) {

            console.log(this.result);
            self.URL =  this.result;//这里的this为self.reader;

            //重置
            if(self.origBox.getElementsByTagName("img")[0]){
                self.origBox.removeChild(self.img);
            }
            self.img = null;
            self.img = new Image();
            self.img.setAttribute("id","target");

            //重置图片，事件绑定
            self.img.onload = function () {


                //侦听imgonload

                if(self.jcropObject){
                    self.jcropObject.destroy();
                }
                //获取图片属性
                self.origPicWidth = self.img.width;
                self.origPicHeight = self.img.height;
                self.shrinkPicWidth = self.img.width;
                self.shrinkPicHeight = self.img.height;
                var areaWidth = self.origBoxWidth * 0.9;
                var areaHeight = self.origBoxHeight * 0.9;
                //图像缩小
                while (self.shrinkPicWidth > areaWidth || self.shrinkPicHeight > areaHeight){
                    self.scale = Math.min(areaWidth/self.shrinkPicWidth , areaHeight/self.shrinkPicHeight);
                    self.shrinkPicWidth = self.shrinkPicWidth * self.scale;
                    self.shrinkPicHeight = self.shrinkPicHeight * self.scale;
                    self.resultScale = self.resultScale * self.scale;
                }
                self.margin_left = (self.origBoxWidth - self.shrinkPicWidth)/2;
                self.margin_top = (self.origBoxHeight - self.shrinkPicHeight)/2;
                this.style.width = self.shrinkPicWidth + "px";
                this.style.height = self.shrinkPicHeight + "px";
                self.origBox.appendChild(self.img);



                self.insert_jcrop();
                // Jcrop的缘故，改用内边距
                self.jcrop_holder = document.getElementsByClassName("jcrop-holder")[0];
                self.jcrop_holder.style.marginLeft = self.margin_left + "px";
                self.jcrop_holder.style.marginTop= self.margin_top + "px";
                //事件绑定
                self.jcrop_tracker = document.getElementsByClassName("jcrop-tracker")[0];
                self.jcrop_tracker.onmousemove = function (ev) {
                    //用canvas画出预览头像，jcrop的预览本质还是同一张图片
                    self.render();
                }
            };
            self.img.src = self.URL;
            self.resultScale = self.scale = 1;

        };
    };


    clipBox.prototype = {
        //初始化标签
        init : function () {
            this.clipBox = document.createElement("div");
            this.clipBox.setAttribute("id","clipBox");
            this.clipBox.innerHTML = "<!--原图区-->" +
                '<div class="left" ><blockquote class="layui-elem-quote">原图区</blockquote>' + 
                "<div id='origBox'></div>" +
                '<div class="inputBox" style="cursor:pointer"><input type="file" id = "picUp"><div class="layui-btn layui-btn-sm block" id="shangchuan" style="width:800px;text-align:center">选择图片</div></div></div>' +
                "<!--logo预览区-->" +
                // "</br>" +
                '<div class="right" ><blockquote class="layui-elem-quote">预览区</blockquote><div id="previewBox"><div class="mask">文字区域</div><canvas id="previewCanvas"></canvas></div></div>' +
               
                // "<button id=''>上传头像</button>"+
                 '<div class="layui-btn layui-btn-sm block" id="upButton">上传图片</div>'+
                "<div class='f-clear'></div>";
            this.appendTarget.appendChild(this.clipBox);
        },
        //获取元素，渲染样式
        getElement : function () {
            this.origBox = document.getElementById("origBox");
            this.previewBox = document.getElementById("previewBox");
            this.previewCanvas = document.getElementById("previewCanvas");
            this.picUp = document.getElementById("picUp");
            this.upButton = document.getElementById("upButton");




            //canvas画笔
            if(this.previewCanvas.getContext){
                this.previewCanvasPen = this.previewCanvas.getContext("2d");
            }

            //渲染样式
            this.origBox.style.width = this.origBoxWidth + "px";
            this.origBox.style.height = this.origBoxHeight + "px";
            this.previewBox.style.width = this.previewBoxWidth + "px";
            this.previewBox.style.height = this.previewBoxHeight + "px";
            this.previewCanvas.width = this.previewBoxWidth;
            this.previewCanvas.height = this.previewBoxHeight;


        },

        getOrigPicURL : function () {
            //侦听获取文件
            var self = this ;
            this.picUp.onchange = function (ev) {


                self.picFile = this.files[0];//每个file的<input>元素都有一个files属性

               console.log(this.files);
                console.log(self.picFile);
                //格式判断
                if(self.picFile.type != "image/jpeg" && self.picFile.type != "image/png"){
                    alert("请上传正确格式");
                    // this.files.length = 0;
                    this.value = '';

                    return false;
                }

                //读取picFile
                self.reader.readAsDataURL(self.picFile);




            }
        },



        //要在图片加载完后使用脚本！！
        insert_jcrop : function () {
            var self =this;

            //设为对象
            self.jcropObject = $.Jcrop('#target',{
                allowSelect : false,
                bgColor : "black",
                minSize : [50,50],
                maxSize : [this.previewBoxWidth,this.previewBoxHeight],
                onChange : function () {
                    self.render();

                },
                onSelect : function () {
                    self.render();

                }
            });

            //计算初始位置
            var x1 = parseInt(self.shrinkPicWidth)/2 - 50;
            var y1 = parseInt(self.shrinkPicHeight)/2 - 50;
            var x2 = parseInt(self.shrinkPicWidth)/2 + 50;
            var y2 = parseInt(self.shrinkPicHeight)/2 + 50;
            //对象方法调用
            self.jcropObject.animateTo([x1,y1,x2,y2]);



        },

        //渲染到canvss中,不需要重新设置self
        render : function () {
            var self = this;
            self.previewCanvasPen.clearRect(0,0,self.previewBoxWidth,self.previewBoxHeight);

            self.startX = self.jcropObject.tellScaled()["x"] /self.resultScale;
            self.startY = self.jcropObject.tellScaled()["y"] /self.resultScale;
            self.clipWidth = self.jcropObject.tellScaled()["w"]/self.resultScale;
            self.clipHeight = self.jcropObject.tellScaled()["h"]/self.resultScale;
            self.previewCanvasPen.drawImage(self.img , self.startX , self.startY , self.clipWidth , self.clipHeight , 0 , 0 , self.previewBoxWidth , self.previewBoxHeight);
        },


        trasform_upload : function () {
            //转换数据
            //本来该用blob的，因为某些原因改用JSon
            var self = this;
            var data = self.previewCanvas.toDataURL();
            console.log(self.previewCanvas)
            // var imgBase64Object = {
            //     "pic" : data
            // };
            var picData = data
            // console.log(data)
             layui.use(['laydate', 'table', 'upload', 'form', 'element'], function() {
                var $ = layui.jquery,
                    upload = layui.upload,
                    laydate = layui.laydate,
                    table = layui.table,
                    form = layui.form,
                    admin = layui.admin,
                    element = layui.element,
                    layer = layui.layer;
                var tableSelect = layui.tableSelect;
                layer.confirm('确定要使用此裁剪后的图片？', {
                            icon: 3,
                            title: '提示'
                        }, function(index) {
                            layer.close(index)
                            var index = layer.load(2, {shade: [0.4, '#393D49']})
                            var tjData = new Object()
                            tjData.institutionNumber = '1004'
                            tjData.file = picData
                            CmsUtility.postAjaxCall(
                                //系统设置
                                'insAdvertising/addPicBase ',
                                tjData,
                                function(data) {
                                    console.log(data)
                                    parent.getSL(data.data)
                                    setTimeout(function(){
                                        var index = parent.layer.getFrameIndex(window.name);
                                    parent.layer.close(index);
                                    },1000)
                                    
                                },
                                function(data) {

                                }
                            )
                        }
                )
            })
            // var cityData = new Object()
            //     cityData.institutionNumber = '1004'
            //     cityData.page = '1'
            //     cityData.limit = '10'
            //     CmsUtility.postAjaxCallJson(
            //         //系统设置
            //         'rebateCard/getClassificationList',
            //         JSON.stringify(cityData),
            //         function(data) {
                        
            //         },
            //         function(data) {

            //         }
            //     )
            //ajax上传
            // var headUploadxhr = new XMLHttpRequest();
            // headUploadxhr.onreadystatechange = function (ev) {
            //     if (headUploadxhr.readyState === 4)
            //     {
            //         if ((headUploadxhr.status >=200 && headUploadxhr.status <300) || headUploadxhr === 304){
            //             alert("上传头像成功");
            //             self.previewCanvasPen.clearRect(0,0,200,200);
            //             self.origBox.removeChild(self.origBox.getElementsByTagName("img")[0]);
            //         }else {
            //             alert("上传失败  " + "status : " + headUploadxhr.status);
            //         }
            //     }
            // };
            // //清除
            // self.previewCanvasPen.clearRect(0,0,200,200);
            // self.origBox.removeChild(self.img);
            // self.jcropObject.destroy();
            // console.log(self.origBox);
            // headUploadxhr.open("post","php",true);
            // headUploadxhr.send(JSON.stringify(imgBase64Object));





        }



    };

    window["clipBox"] = clipBox;
})(jQuery);