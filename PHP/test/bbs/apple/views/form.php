<form id="<?php echo @$formId ?>" action="<?php echo $formAction ?>" method="post">

    <h2><?php echo $formH2 ?></h2>

    <?php if (@$formTitle) { ?>
        <input class="title" type="text" name="title" placeholder="请输入帖子标题..." />
    <?php } ?>

    <textarea type="text" name="say" placeholder="请输入发言内容..."></textarea>

    <input class="submit" type="submit" value="提交" />

</form>