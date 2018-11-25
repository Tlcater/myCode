# 版本库建立
git init 创建版本库

git add fileName  将文件提交到**暂存区**

git commit -m "备注"  将文件由暂存区提交到**版本库**
# 版本选择
git log  查询版本提交信息

git reset --hard HEAD^^  ('^'代表退回上个版本,"^^"代表退回上上个版本)

git reset --hard 546cd  ('546cd'commit的id前几个字符,可以退回制定id的版本) 

git reflog 查询之前输入的命令