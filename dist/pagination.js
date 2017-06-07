'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by zhanghuizhen on 2017/5/31.
 */
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            currentPage3: 1,
            table: [],
            tableData: []
        },
        mounted: function mounted() {
            var _this = this;
            this.$nextTick(function () {
                this.$http({
                    url: 'data.json'
                }).then(function (data) {
                    data.body.forEach(function (val, index) {
                        _this.table.push(val);
                    });
                    console.log(data.body.length);
                    for (var i = (this.currentPage3 - 1) * 2; i < 2; i++) {
                        if (_this.table[i] != undefined) {
                            _this.tableData.push(_this.table[i]);
                        }
                    }
                }, function (error) {});
            });
        },
        methods: {
            onSubmit: function onSubmit() {
                console.log(this.form);
            },
            del: function del(el) {
                this.tableData.splice(el, 1);
            },
            handleSizeChange: function handleSizeChange(val) {
                console.log('\u6BCF\u9875 ' + val + ' \u6761');
            },
            handleCurrentChange: function handleCurrentChange(val) {
                console.log('当前页:' + val);
                this.currentPage3 = val;
                console.log(typeof val === 'undefined' ? 'undefined' : _typeof(val));
                this.tableData.length = 0;
                for (var i = (val - 1) * 2; i < 2 * val; i++) {
                    console.log(this.table[i]);
                    if (this.table[i] != undefined) {
                        this.tableData.push(this.table[i]);
                    }

                    console.log(123);
                    console.log(this.tableData);
                }
            }
        }
    });
};