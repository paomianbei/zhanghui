/**
 * Created by zhanghuizhen on 2017/5/31.
 */
window.onload=function(){
    new Vue({
        el:'#app',
        data:{
            currentPage3:1,
            table:[],
            tableData: []
        },
        mounted:function(){
            var _this=this;
            this.$nextTick(function(){
                this.$http({
                    url:'data.json',
                }).then(function(data){
                    data.body.forEach(function(val,index){
                        _this.table.push(val);
                    });
                    console.log(data.body.length);
                    for(var i=(this.currentPage3-1)*2;i<2;i++){
                        if(_this.table[i]!=undefined){
                            _this.tableData.push( _this.table[i]);
                        }
                    }
                },function(error){

                })
            })

        },
        methods: {
            onSubmit:function(){
                console.log(this.form);
            },
            del:function (el){
                this.tableData.splice(el,1);
            },
            handleSizeChange:function(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange:function(val) {
                console.log('当前页:' +val);
                this.currentPage3=val;
                console.log(typeof val);
                this.tableData.length=0;
                for(var i=(val-1)*2;i<2*val;i++){
                    console.log(this.table[i]);
                    if(this.table[i]!=undefined){
                        this.tableData.push(this.table[i]);
                    }

                    console.log(123);
                    console.log(this.tableData);

                }

            }
        }
    });

}

