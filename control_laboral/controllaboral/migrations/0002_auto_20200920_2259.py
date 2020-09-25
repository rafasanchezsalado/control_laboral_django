# Generated by Django 3.1.1 on 2020-09-20 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('controllaboral', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='name',
            field=models.CharField(max_length=128),
        ),
    ]