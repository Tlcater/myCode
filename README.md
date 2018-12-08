# 版本库建立
git init 创建版本库

git add fileName  将文件提交到**暂存区**

git commit -m "备注"  将文件由暂存区提交到**版本库**
# 版本选择
git log  查询版本提交信息

git reset --hard HEAD^^  ('^'代表退回上个版本,"^^"代表退回上上个版本)

git reset --hard 546cd  ('546cd'commit的id前几个字符,可以退回制定id的版本) 

git reflog 查询之前输入的命令
# 修改撤销
git checkout -- file  //放弃工作区的修改

git reset HEAD file  //放弃暂存区的修改

git rm file 
git commit -m "删除file"
//删除版本的文件
# 分支创建与合并
git branch dev //创建dev分支
git checkout dev //切换到dev分支
git checkout -b dev //创建并且切换到dev分支
git merge dev //将dev的分支合并到当前分支
git branch -d branchname //删除指定的分支